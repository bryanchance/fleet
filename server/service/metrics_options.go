package service

import (
	"context"
	"fmt"
	"time"

	"github.com/kolide/fleet/server/kolide"
)

func (mw metricsMiddleware) GetOptions(ctx context.Context) ([]kolide.Option, error) {
	var (
		options []kolide.Option
		err     error
	)
	defer func(begin time.Time) {
		lvs := []string{"method", "GetOptions", "error", fmt.Sprint(err != nil)}
		mw.requestCount.With(lvs...).Add(1)
		mw.requestLatency.With(lvs...).Observe(time.Since(begin).Seconds())
	}(time.Now())
	options, err = mw.Service.GetOptions(ctx)
	return options, err
}

func (mw metricsMiddleware) ModifyOptions(ctx context.Context, or kolide.OptionRequest) ([]kolide.Option, error) {
	var (
		options []kolide.Option
		err     error
	)
	defer func(begin time.Time) {
		lvs := []string{"method", "ModifyOptions", "error", fmt.Sprint(err != nil)}
		mw.requestCount.With(lvs...).Add(1)
		mw.requestLatency.With(lvs...).Observe(time.Since(begin).Seconds())
	}(time.Now())
	options, err = mw.Service.ModifyOptions(ctx, or)
	return options, err
}

func (mw metricsMiddleware) ResetOptions(ctx context.Context) ([]kolide.Option, error) {
	var (
		options []kolide.Option
		err     error
	)
	defer func(begin time.Time) {
		lvs := []string{"method", "ResetOptions", "error", fmt.Sprint(err != nil)}
		mw.requestCount.With(lvs...).Add(1)
		mw.requestLatency.With(lvs...).Observe(time.Since(begin).Seconds())
	}(time.Now())
	options, err = mw.Service.ResetOptions(ctx)
	return options, err
}
